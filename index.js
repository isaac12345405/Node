 // =============================
// 🤖 Bot de Memes, GIFs e Vídeos Aleatórios
// =============================

import { Client, GatewayIntentBits } from "discord.js";
import fetch from "node-fetch";

// 🧩 Crie seu bot em: https://discord.com/developers/applications
// Cole o token abaixo:
const TOKEN = "MTM2NDI2ODIwNTA1MjM5NTU0MA.GQaI0W.c36lecpPf9-clNCPwI8Bfh53FBRh1G0a4NpNP";

// =============================
// Inicialização do bot
// =============================
const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
              GatewayIntentBits.MessageContent,
                ],
                });

                client.once("ready", () => {
                  console.log(`✅ Logado como ${client.user.tag}`);
                  });

                  // =============================
                  // Comandos
                  // =============================
                  client.on("messageCreate", async (msg) => {
                    if (msg.author.bot) return;

                      // 🎭 MEME ALEATÓRIO
                        if (msg.content.startsWith("!meme")) {
                            try {
                                  const res = await fetch("https://meme-api.com/gimme");
                                        const data = await res.json();
                                              await msg.channel.send({
                                                      embeds: [
                                                                {
                                                                            title: data.title,
                                                                                        image: { url: data.url },
                                                                                                    color: 0x00ffff,
                                                                                                                footer: { text: `De: r/${data.subreddit}` },
                                                                                                                          },
                                                                                                                                  ],
                                                                                                                                        });
                                                                                                                                            } catch (err) {
                                                                                                                                                  msg.reply("❌ Erro ao buscar meme.");
                                                                                                                                                      }
                                                                                                                                                        }

                                                                                                                                                          // 🎞️ GIF ALEATÓRIO (usando Giphy)
                                                                                                                                                            if (msg.content.startsWith("!gif")) {
                                                                                                                                                                try {
                                                                                                                                                                      const apiKey = "dc6zaTOxFJmzC"; // chave pública do Giphy
                                                                                                                                                                            const res = await fetch(
                                                                                                                                                                                    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=funny`
                                                                                                                                                                                          );
                                                                                                                                                                                                const data = await res.json();
                                                                                                                                                                                                      await msg.channel.send({
                                                                                                                                                                                                              embeds: [
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                    title: "🎞️ GIF Aleatório",
                                                                                                                                                                                                                                                image: { url: data.data.images.original.url },
                                                                                                                                                                                                                                                            color: 0xff00ff,
                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                        } catch (err) {
                                                                                                                                                                                                                                                                                              msg.reply("❌ Erro ao buscar GIF.");
                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                      // 📺 VÍDEO ALEATÓRIO (YouTube)
                                                                                                                                                                                                                                                                                                        if (msg.content.startsWith("!video")) {
                                                                                                                                                                                                                                                                                                            const videos = [
                                                                                                                                                                                                                                                                                                                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                                                                                                                                                                                                                                                                                                        "https://www.youtube.com/watch?v=9bZkp7q19f0",
                                                                                                                                                                                                                                                                                                                              "https://www.youtube.com/watch?v=fLexgOxsZu0",
                                                                                                                                                                                                                                                                                                                                    "https://www.youtube.com/watch?v=60ItHLz5WEA",
                                                                                                                                                                                                                                                                                                                                          "https://www.youtube.com/watch?v=J---aiyznGQ",
                                                                                                                                                                                                                                                                                                                                              ];
                                                                                                                                                                                                                                                                                                                                                  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
                                                                                                                                                                                                                                                                                                                                                      await msg.channel.send({
                                                                                                                                                                                                                                                                                                                                                            embeds: [
                                                                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                                                                              title: "📺 Vídeo Aleatório",
                                                                                                                                                                                                                                                                                                                                                                                        description: `[Clique para assistir](${randomVideo})`,
                                                                                                                                                                                                                                                                                                                                                                                                  color: 0xffa500,
                                                                                                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                      });

                                                                                                                                                                                                                                                                                                                                                                                                                      // =============================
                                                                                                                                                                                                                                                                                                                                                                                                                      // Login
                                                                                                                                                                                                                                                                                                                                                                                                                      // =============================
                                                                                                                                                                                                                                                                                                                                                                                                                      client.login(TOKEN);
