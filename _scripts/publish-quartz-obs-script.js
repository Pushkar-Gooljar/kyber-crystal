
    const { exec } = require('child_process');

    module.exports = async (params) => {
        const powershellScriptPath = 'C:\\Users\\HP\\OneDrive\\Documents\\scripts\\publish-quartz.ps1'; // Adjust path
        const command = `powershell.exe -File "${powershellScriptPath}"`;
        new Notice("🚀 Starting Quartz publish...", 3000);
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                new Notice(`Error running PowerShell script: ${error.message}`, 5000);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                // new Notice(`PowerShell script stderr: ${stderr}`, 5000);
            }
            console.log(`stdout: ${stdout}`);
            new Notice("✅ Quartz site published successfully!", 5000);
        });
    };