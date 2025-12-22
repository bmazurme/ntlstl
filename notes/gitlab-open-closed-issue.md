import fs from 'node:fs/promises';
import https from 'node:https';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

async function closeExistingIssuesByLabel(projectId, label) {
  const token = process.env.GITLAB_TOKEN;
  const url = `https://git.dom/api/v4/projects/${projectId}/issues`;


  try {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    // Получаем все открытые issues с нужным лейблом
    const response = await fetch(`${url}?labels=${label}&state=opened`, {
      method: 'GET',
      agent,
      headers: {
        'Private-Token': token,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch issues: ${response.statusText}`);
    }

    const issues = await response.json();

    for (const issue of issues) {
      // Закрываем каждую найденную задачу
      const closeResponse = await fetch(`${url}/${issue.iid}`, {
        method: 'PUT',
        agent,
        headers: {
          'Private-Token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state_event: 'close',
        }),
      });

      if (closeResponse.ok) {
        console.log(`Closed issue #${issue.iid}: ${issue.title}`);
      } else {
        console.error(`Failed to close issue #${issue.iid}: ${closeResponse.statusText}`);
      }
    }
  } catch (error) {
    console.error('Error closing existing issues:', error);
  }
}

async function createIssue(title, description, projectId, labels) {
  const token = process.env.GITLAB_TOKEN;
  const url = `https://git.dom/api/v4/projects/${projectId}/issues`;

  try {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const response = await fetch(url, {
      method: 'POST',
      agent,
      headers: {
        'Private-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        labels,
      }),
    });

    const result = await response.json();

    console.warn('Issue created:', result);
  } catch (error) {
    console.error('Error creating issue:', error);
  }
}

async function readOutdatedReport() {
  try {
    console.warn('----------------------------------');
    const fileContent = await fs.readFile('outdated-report.json', 'utf8');
    const cleanedContent = fileContent.replace(/^\uFEFF/, '');
    const outdatedPackages = JSON.parse(cleanedContent);

    const title = 'Устаревшие зависимости';
    let description = `Обнаружены устаревшие зависимости:\n\n`;
    let i = 0;

    for (const item in outdatedPackages) {
      description += `- ${item}: текущая версия ${outdatedPackages[item].current}, доступна ${outdatedPackages[item].wanted}\n`;
      i++;
    }

    if (i > 0) {
      // Сначала закрываем старые задачи с лейблом 'dependencies'
      await closeExistingIssuesByLabel(process.env.PROJECT_ID, 'dependencies');
      // Затем создаём новую
      createIssue(title, description, process.env.PROJECT_ID, ['dependencies']);
    }

    console.warn('PROJECT_ID', process.env.PROJECT_ID);
    console.warn('----------------------------------');
  } catch (error) {
    console.error('Ошибка при обработке файла:', error);
  }
}

async function main() {
  await readOutdatedReport();
}

main();
