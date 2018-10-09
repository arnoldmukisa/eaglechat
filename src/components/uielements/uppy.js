const Uppy = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const GoogleDrive = require('@uppy/google-drive');
const Dropbox = require('@uppy/dropbox');
const Instagram = require('@uppy/instagram');
const Webcam = require('@uppy/webcam');
const Tus = require('@uppy/tus');

const SERVER = null;

export default function uppyInit(options, onSuccess) {
  const uppy = Uppy({
    debug: true,
    autoProceed: options.autoProceed,
    restrictions: options.restrictions || '',
  });
  uppy.use(Tus, { endpoint: options.endpoint, resume: true });
  uppy.use(Dashboard, {
    trigger: options.trigger,
    inline: options.DashboardInline,
    target: options.target,
    note: options.restrictions || 'Images and video only, 300kb or less',
  });
  if (options.GoogleDrive) {
    uppy.use(GoogleDrive, { target: Dashboard, host: SERVER });
  }
  if (options.Dropbox) {
    uppy.use(Dropbox, { target: Dashboard, host: SERVER });
  }
  if (options.Instagram) {
    uppy.use(Instagram, { target: Dashboard, host: SERVER });
  }
  if (options.Webcam) {
    uppy.use(Webcam, { target: Dashboard });
  }
  uppy.on('core:success', fileList => {
    onSuccess(fileList);
  });
  uppy.run();
}
