export default function loadBalancer(chinaDownload, usDownload) {
  return Promise.race([chinaDownload, usDownload]);
}
