module.exports = {
	error(message = "Something has failed. please try again later.") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
  header() {
    return;
  }
};
