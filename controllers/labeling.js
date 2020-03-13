
/**
 * GET /labeling
 * Login page.
 */
exports.getLabeling = (req, res) => {
  res.sendfile('public/static/vgg.html', {
    'projectConfig': projectConfig,
  });
};
