export default function invertColor(hex) {
  const hexString = hex.toString();

  const rHex = hexString.slice(0, 2);
  const gHex = hexString.slice(2, 4);
  const bHex = hexString.slice(4);

  const rInv = (255 - parseInt(rHex, 16)).toString(16);
  const gInv = (255 - parseInt(gHex, 16)).toString(16);
  const bInv = (255 - parseInt(bHex, 16)).toString(16);

  return `${rInv}${gInv}${bInv}`;
}
