# Creating a New ACM in Amplio Backend

This guide provides step-by-step instructions for creating a new ACM in the Amplio backend system

## Prerequisites
- Make sure you have your GitHub SSH key connected to the server
- Access credentials for the Amplio backend system

## Connection Process

1. *Open Git Bash* and connect to the server using SSH:
   ```bash
   ssh -i .ssh/[your ssh key name] -p 4425 ephrim@94.130.76.196
   ```

2. **Verify Successful Connection**
   
   Upon successful connection, you should see a welcome message:
   ```
   Welcome to Ubuntu 24.04.2 LTS (GNU/Linux 6.8.0-55-generic x86_64)
   ........
   ```

3. **Navigate the File System**
   
   List available directories:
   ```bash
   ls
   ```
   
   Verify that `amplio-backend` folder appears in the list, then change to the backend directory:
   ```bash
   cd amplio-backend
   ```

## Creating the New ACM

4. **Execute the Creation Command**
   
   Run the following command to create a new ACM:
   ```bash
   just new-acm -n '{project name}' --program-code '{project code}' -o '{the organization}'
   ```


# ACM Command Parameters

## Command Parameters Reference

The `new-acm` command creates a new Access Control Module in the Amplio backend system. Below is a comprehensive reference guide for all available parameters

| Parameter | Description | Requirement |
|-----------|-------------|------------|
| `new-acm` | Creates a new ACM  | **Required** |
| `-n, --name <value>` | What the customer calls the program. | **Required** |
| `--program-code <value>` | The project code  | **Required** |
| `-o, --org <value>` | The customer running or sponsoring the program. | **Required** |
| `--salesforce-id <value>` | The program's organization's parent. | Optional |
| `--dry-run` | Don't update anything | Optional |

## Usage Example

```bash
just new-acm -n 'Sasakawa Scale Up' --program-code 'SSA-ETH-SU' -o 'Sasakawa Africa Association - Ethiopia'
```

## Completion

After running the command, the system will create a new ACM with the specified parameters. Verify the creation was successful before proceeding with further actions.