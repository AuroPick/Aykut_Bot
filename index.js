const Discord = require("discord.js");
const RandomMeme = require("random-text-meme");
const {
	Client,
	Attachment
} = require("discord.js");
const {
	RichEmbed
} = require("discord.js");
const ytdl = require("ytdl-core");
const search = require("yt-search");
const client = new Discord.Client();
const prefix = "-";

var servers = {};

client.on("ready", () => {
	console.log(`${client.user.username} basarili bir sekilde baglandi!`)
	client.user.setActivity(`Prefix: "${prefix}" | ${prefix}yardim | ${client.user.username} Online!`)
});

client.on("disconnect", () => {
	console.log(`${client.user.username} kapandi!`)
});

client.on("message", message => {
	if (message.content.startsWith(`${prefix}avatar`)) {
		var user = message.mentions.users.first();
		if (user) {
			let embed = new Discord.RichEmbed()
				.setTitle(`${user.username}`)
				.setImage(user.avatarURL)
				.setColor(0xff0000);
			message.channel.send(embed);
		} else {
			let embed = new Discord.RichEmbed()
				.setTitle(message.author.username)
				.setImage(message.author.avatarURL)
				.setColor(0xff0000);
			message.channel.send(embed);
		}

	}

	if (message.content.startsWith(`${prefix}ana skm`)) {
		const attachment = new Attachment('https://i.kym-cdn.com/photos/images/newsfeed/001/562/308/87f.jpg');
		var user = message.mentions.users.first();
		if (user) {
			message.channel.send(`<@${user.id}>`, attachment);
		} else {
			message.channel.send(attachment);
		}
	}

	if (message.content === `${prefix}eren`) {
		const embed = new RichEmbed()
			.setTitle("Eren Yiğit")
			.setColor(0xff0000)
			.setDescription("Kolsuz oç");
		message.channel.send(embed);
	}

	if (message.content === `${prefix}catay`) {
		let embed = new RichEmbed()
			.setTitle("Çağatay Toplutepe")
			.setColor(0xFF0000)
			.setDescription("Çağatay İmparatorluğu'nun birinci imparatoru I. Çağatay");
		message.channel.send(embed);
	}

	if (message.content.startsWith(`${prefix}cagir`)) {
		var user = message.mentions.users.first();
		var role = message.mentions.roles.first();
		const cagirimg = ["https://media1.tenor.com/images/42c95d0f7bcb8d01120c3e9b1deb205b/tenor.gif?itemid=15157931", "https://media1.tenor.com/images/f187122ecb1192da5f4484e21b08d8a1/tenor.gif?itemid=9580670", "https://media1.tenor.com/images/f7200e313c9d1ca70f1c13be05f17ab4/tenor.gif?itemid=14597720", "https://media1.tenor.com/images/6c70afdf2a88f91929b6c35ad68ab965/tenor.gif?itemid=12780411", "https://media.giphy.com/media/wOzfGOVG5oapW/giphy.gif", "https://media.giphy.com/media/zp0nsdaiKMP4s/giphy.gif", "https://media1.tenor.com/images/82ec65faad5569cbe9f8a77cdbc91f07/tenor.gif?itemid=10578246", "https://media1.tenor.com/images/e37bfd867b7292e219c745ff399449db/tenor.gif?itemid=12990580", "https://media1.tenor.com/images/d71127d6086a918f1deb3fe54a5959e0/tenor.gif?itemid=4988388"];
		const random = Math.floor(Math.random() * cagirimg.length);
		if (user) {
			message.channel.send(`<@${user.id}>, <@${message.author.id}> tarafından çağırıldınız!`);
			let embed = new Discord.RichEmbed()
				.setImage(cagirimg[random]);
			message.channel.send(embed);

		} else if (role) {
			message.channel.send(`<@&${role.id}>, <@${message.author.id}> tarafından çağırıldınız!`);
			let embed = new Discord.RichEmbed()
				.setImage(cagirimg[random]);
			message.channel.send(embed);
		} else {
			message.channel.send(`@everyone, <@${message.author.id}> tarafından çağırıldınız!`);
			let embed = new Discord.RichEmbed()
				.setImage(cagirimg[random]);
			message.channel.send(embed);
		}
	}

	if (message.content === `${prefix}yardim`) {
		const ownerid = '231457748422885378';
		const owner = client.users.get(ownerid);
		const black = "`";
		const square = ":small_blue_diamond:";
		const embed = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL, "https://discord.js.org")
			.setDescription(`Bir gün herkes ${client.user.username} kullanacak!`)
			.setThumbnail(owner.avatarURL)
			.setTitle("Komutlar")
			.addBlankField()
			.addField(`${square}**Avatar**`, black + prefix + "avatar` == Etiketlenen kişinin avatarını gösterir. Etiket yoksa mesaj sahibinin.")
			.addField(`${square}**Ana Skm**`, black + prefix + "ana skm` == Etiketlenen kişinin anasını sikersiniz.")
			.addField(`${square}**Eren**`, black + prefix + "eren` == Eren hakkında bilgi verir.", true)
			.addField(`${square}**Çağatay**`, black + prefix + "catay` == Çağatay hakkında bilgi verir.", true)
			.addField(`${square}**Çağır**`, black + prefix + "cagir` == Etiketlenen kişiyi veya role sahip kişileri çağırır. Etiket kullanılmazsa herkesi çağırır.")
			.addField(`${square}**Çet**`, black + prefix + "cet` == YAAAA ÇEEETT BU NE ABEE", true)
			.addField(`${square}**Ping**`, black + prefix + "ping` == Botun pingini gösterir.")
			.addField(`${square}**Emoji**`, black + prefix + `emoji${black} == Tema seçilmezse random emoji oluşturur. \n ${black + prefix}emoji tema${black} == Temaları listeler. \n ${black}Örnek:${black} **${prefix}emoji =** Random emoji: ᕦ( ͡° ͜ʖ ͡°)ᕤ \n ${black}Örnek:${black} **${prefix}emoji pedobear =** Random pedobear emoji: ᶘ ͡°ᴥ ͡°ᶅ `)
			.addField(`${square}**Müzik**`, `\`${prefix}music\` == Müzik komutlarını gösterir.`)
			.addField("\u200B", "**Evet şuan sadece bu kadar.**")
			.setTimestamp()
			.setFooter("Aykut Saki yapmış", client.user.avatarURL);
		message.channel.send(embed);
	}

	if (message.content === `${prefix}music`) {
		const ownerid = '231457748422885378';
		const owner = client.users.get(ownerid);
		const square = ":small_blue_diamond:";
		const embed = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL, "https://discord.js.org")
			.setDescription(`Bir gün herkes ${client.user.username} kullanacak!`)
			.setThumbnail(owner.avatarURL)
			.setTitle("Komutlar")
			.addBlankField()
			.addField(`${square}**Oynat**`, `\`${prefix}oynat\` == Link varsa linki oynatır yoksa YouYube'da aratır.`)
			.addField(`${square}**Atla**`, `\`${prefix}atla\` == Sıradaki şarkıya geçer.`)
			.addField(`${square}**durdur**`, `\`${prefix}durdur\` == Listeyi temizler ve odadan ayrılır.`)
			.addField(`${square}**baglan**`, `\`${prefix}baglan\` == Odaya bağlanır.`)
			.addField(`${square}**ayril**`, `\`${prefix}ayril\` == Listeyi temizler ve odadan ayrılır`);
		message.channel.send(embed);
	}

	if (message.content === `${prefix}cet`) {
		const cetimg = ["https://i.ibb.co/NWNSsNt/yacet.jpg", "https://i.ibb.co/Qn24pZk/yacet-2.jpg", "https://i.ibb.co/cCf7T0L/yacet-3.jpg", "https://i.ibb.co/8bFX8rB/yacet-4.jpg", "https://i.ibb.co/4StFsfC/yacet-5.jpg", "https://i.ibb.co/N63wKSK/yacet-6.jpg", "https://i.ibb.co/WyNrcFM/yacet-7.jpg", "https://i.ibb.co/5MqJhd7/yacet-8.jpg", "https://i.ibb.co/JntR57x/yacet-9.jpg", "https://i.ibb.co/SrLh6FV/yacet-10.jpg"];
		const random = Math.floor(Math.random() * cetimg.length);
		const embed = new Discord.RichEmbed()
			.setImage(cetimg[random]);
		message.channel.send("YA ÇETTT BU NE ABEEE");
		message.channel.send(embed);
	}

	if (message.channel.id == 455145845986295838) {
		if (message.content.startsWith("!p") || message.content.startsWith("!loop") || message.content.startsWith("!s") || message.author.id == 235088799074484224 || message.content.startsWith("!leave")) {
			message.delete(1000);
		}
	}

	if (message.content === `${prefix}ping`) {

		if (client.ping <= 100) {
			var ping_durum = ":green_circle:"
		} else if (client.ping <= 150) {
			var ping_durum = ":yellow_circle:"
		} else {
			var ping_durum = ":red_circle:"
		}

		const embed = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL, "https://discord.js.org")
			.setTitle(":signal_strength: Ping")
			.addField("**Bot**", `**${Math.round(client.ping)}ms** ${ping_durum}`)
			.setFooter(`${message.author.username} istedi`, message.author.avatarURL)
			.setTimestamp();


		message.channel.send(":chart_with_upwards_trend: ölçülüyor").then(d_msg => {
			d_msg.delete(1000);
		}, setTimeout(function () {
			message.channel.send(embed);
		}, 2000));
	}

	if (message.content.startsWith(`${prefix}emoji`)) {
		const args = message.content.slice(prefix.length).split(" ");
		const black = "`";
		const bold = "**";
		if (typeof args[1] === 'undefined') {
			message.channel.send(black + `Random emoji:${black} ${RandomMeme.getEmoji()}`);
		} else if (args[1] == "tema") {
			const embed = new Discord.RichEmbed()
				.setDescription(RandomMeme.getThemes());
			message.channel.send(embed);
		} else if (args[1]) {
			var temayok = true;
			for (let index = 0; index < RandomMeme.getThemes().length; index++) {
				if (args[1] === RandomMeme.getThemes()[index]) {
					message.channel.send("`Random " + args[1] + " emoji:` " + RandomMeme.getEmoji(args[1]));
					temayok = false;
				}
			}
			if (temayok) {
				const embed = new Discord.RichEmbed()
					.setDescription(RandomMeme.getThemes());
				message.channel.send("Böyle bir tema yok! \n ").then(setTimeout(function () {
					message.channel.send("Temalar:")
				}, 1000), setTimeout(function () {
					message.channel.send(embed);
				}, 2000));

			}
		}

	}

	if (message.content.startsWith(`${prefix}oynat`)) {

		let args = message.content.slice(prefix.lenght).split(" ");
		var server = servers[message.guild.id];

		function play(connection, message) {

			server.dispatcher = connection.playStream(ytdl(server.queue[0], {
				filter: "audioonly"
			}));

			server.queue.shift();

			server.dispatcher.on("end", function () {
				if (server.queue[0]) {
					play(connection, message);
				} else {
					connection.disconnect();
				}
			});
		}

		if (!args[1]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`:x: **Yanlış kullanım** :x: \n \n :ballot_box_with_check: ${prefix}oynat link veya anahtar sözcük`)
				.setColor("#ff0000");
			message.channel.send(embed);
			return;
		}

		if (!servers[message.guild.id]) servers[message.guild.id] = {
			queue: []
		}
		var server = servers[message.guild.id];

		let validate = ytdl.validateURL(args[1]);
		if (message.member.voiceChannel) {
			if (!validate) {
				search(args.join(' '), function (err, res) {
					if (err) return message.channel.send("**Hata oluştu!**");

					let videos = res.videos.slice(0, 10);

					let resp = '';
					for (var i in videos) {
						resp += `**[${parseInt(i) + 1}]: ** \`${videos[i].title}\`\n`;
					}

					resp += `\n**\`1 ile ${videos.length} arasında sayı seçiniz!\`**`;

					message.channel.send(resp);

					const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0;

					const collector = message.channel.createMessageCollector(filter);
					collector.videos = videos;
					collector.once('collect', function (m) {
						if (!message.guild.voiceConnection) {
							message.member.voiceChannel.join().then(function (connection) {
								var videourl = videos[parseInt(m.content) - 1].url;
								server.queue.push(videourl);
								play(connection, videourl);
							});
							return;
						} else {
							var videourl = videos[parseInt(m.content) - 1].url;
							server.queue.push(videourl);
							return;
						}
					});
				});
			} else {
				if (!message.guild.voiceConnection) {
					if (message.member.voiceChannel) {
						message.member.voiceChannel.join().then(function (connection) {
							play(connection, message);
						});
					}
				}
			}
		}


		if (!message.member.voiceChannel) {
			const embed = new Discord.RichEmbed()
				.setDescription(":x: **Yanlış kullanım** :x: \n \n :loud_sound: Bir ses kanalında olmalısın!")
				.setColor("#ff0000");
			message.channel.send(embed);
		}


	}

	if (message.content === `${prefix}atla`) {
		var server = servers[message.guild.id];
		try {
			if (server.dispatcher) {
				server.dispatcher.end();
				message.channel.send(`:fast_forward: **Müzik atlandı!**`);
				return;
			}
		} catch (ex) {
			message.channel.send("**Sırada müzik yok!**");
		}
	}

	if (message.content === `${prefix}durdur`) {
		var server = servers[message.guild.id];
		if (message.guild.voiceConnection) {
			try {
				for (var i = server.queue.length - 1; i >= 0; i--) {
					server.queue.splice(i, 1);
				}
				server.dispatcher.end();
				message.channel.send("**Müzik durduruldu!**");
				if (message.guild.voiceConnection) {
					message.guild.voiceConnection.disconnect();
				}
			} catch {
				message.channel.send("**Durduralacak müzik yok!**");
				if (message.guild.voiceConnection) {
					message.guild.voiceConnection.disconnect();
				}
				return;
			}
		} else if (!message.member.voiceChannel) {
			message.channel.send("**Bu komutu kullanabilmek için ses kanalında olmalısın!**");
		}


	}

	if (message.content === `${prefix}baglan`) {
		if (message.member.voiceChannel) {
			if (!message.guild.connection) {
				message.member.voiceChannel.join();
				return;
			} else {
				message.channel.send("**Zaten odadayım!**");
				return;
			}
		} else {
			message.channel.send("**Bu komutu kullanabilmek için ses kanalında olman lazım!**");
			return;
		}

	}

	if (message.content === `${prefix}ayril`) {
		var server = servers[message.guild.id];
		if (message.member.voiceChannel) {
			if (message.guild.voiceConnection) {
				try {
					for (var i = server.queue.length - 1; i >= 0; i--) {
						server.queue.splice(i, 1);
					}
					server.dispatcher.end();
					message.channel.send("**Liste temizlendi!**");
					if (message.guild.voiceConnection) {
						message.guild.voiceConnection.disconnect();
					}
				} catch {
					message.channel.send("**Liste temizlenemedi!**");
					if (message.guild.voiceConnection) {
						message.guild.voiceConnection.disconnect();
					}
				}
				message.channel.send("**Odadan Çıkıldı!**")
				return;
			} else {
				message.channel.send("**Zaten odada değilim!**");
			}
		} else {
			message.channel.send("**Bu komutu kullanabilmek için ses kanalında olman lazım!**");
		}

	}


});

client.login(process.env.token);