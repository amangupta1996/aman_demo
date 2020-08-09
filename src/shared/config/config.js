export const candidateProfileReviewConfig = {
  labelStatusColor: {
    incomplete: "yellow",
    verified: "green",
    rejected: "red"
  },
  getJRRLabelColor: function(status) {
    return this.labelStatusColor[status]
  }
}

