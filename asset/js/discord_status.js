function updateDiscordStatus()
{
	var req = new XMLHttpRequest();
	req.onload = function()
	{
		if (req.readyState == 4 && req.status == 200)
		{
			console.log(req.responseText);
			var json = JSON.parse(req.responseText);

			document.getElementById('status').classList.add(json.members[0].status);
			document.getElementById('discord-avatar').src = json.members[0].avatar_url;
			document.getElementById('discord-name').innerText = json.members[0].username + '#' + json.members[0].discriminator;
			if(json.members[0].game)
			{
				document.getElementById('playing').innerText = 'Playing: ' + json.members[0].game.name;
			}
			//setInterval(updateDiscordStatus, 60000)
		}
	};
	req.open('GET', 'https://discordapp.com/api/guilds/417716643427385355/widget.json?' + Math.random().toString(36).slice(-8), true);
	req.send();
}

document.addEventListener('DOMContentLoaded', function()
{
	updateDiscordStatus();
});
