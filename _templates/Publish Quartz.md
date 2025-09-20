<%*
const repoPath = "C:\\Users\\HP\\quartz\\quartz"; // change this to your Quartz repo root
const commitMsg = await tp.system.prompt("Enter commit message");
const command = `cd "${repoPath}" && git add content && git commit -m "${commitMsg}" && git push origin v4`;
await tp.system.run(command);
%>
