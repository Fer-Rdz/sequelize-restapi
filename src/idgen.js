const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export let code = "";
for (let i = 0; i < 20; i++) {
  const randomIndex = Math.floor(Math.random() * caracteres.length);
  code += caracteres[randomIndex];
}
