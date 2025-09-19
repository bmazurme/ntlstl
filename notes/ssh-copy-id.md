```bash
ssh-copy-id username@remote-host

# windows
type $env:USERPROFILE\.ssh\id_rsa.pub | ssh user@remote-host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```
