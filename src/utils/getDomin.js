export default function getDomain (url) {
  const domin = url.split('/')
  return `${domin[0]}//${domin[2]}/`
}