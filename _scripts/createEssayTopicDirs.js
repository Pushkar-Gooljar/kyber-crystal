// Filename: _scripts/createProject.js

async function createEssayTopicDirs(tp) {
    // 1. Prompt the user for the project/topic name
    const topicName = await tp.system.prompt("Enter the new topic name:");

    // If the user cancels the prompt, stop the script
    if (!topicName) {
        return;
    }

    // --- MODIFICATION START ---
    // Define the fixed base path where all new topics should be created.
    // Ensure this folder already exists in your vault.
    const fixedBasePath = "content/General Paper AS Level/_topics";
    const baseFolder = `${fixedBasePath}/${topicName}`;
    // --- MODIFICATION END ---


    // 2. Define the subfolder structure (this remains the same)
    const subFolders = [
        "01_Sources",
        "02_Notes",
        "02_Notes/Concepts",
        "02_Notes/Causes",
        "02_Notes/Consequences",
        "02_Notes/Remedies",
        "02_Notes/Statistics",
        "02_Notes/Examples",
        "03_Essay"
    ];

    // 3. Create all the folders, starting with the main topic folder
        await app.vault.createFolder(baseFolder); 
        for (const folder of subFolders) {
            await app.vault.createFolder(`${baseFolder}/${folder}`);
        }
    // 4. Create the main MOC (Map of Content) file inside the correct subfolder
    const mocContent = `# MOC: ${topicName}\n\nThis is the central Map of Content for the topic of **${topicName}**.\n\n## Introduction\n- \n\n## Section 1: \n- \n\n## Section 2: \n- \n\n## Section 3: \n- \n\n## Conclusion\n- `;
    
    // Construct the full path for the new MOC file
    const mocPath = `${baseFolder}/03_Essay/${topicName} - MOC.md`;
    await tp.file.create_new(mocContent, mocPath);

    // 5. Announce completion
    new Notice(`Project structure for "${topicName}" created successfully!`);
}

module.exports = createEssayTopicDirs;