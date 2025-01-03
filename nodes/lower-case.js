module.exports = function(RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    this.on("input", function(msg) {
      msg.payload = msg.payload.toLowerCase();
      this.send(msg);
    });
  }
  RED.nodes.registerType("lower-case", LowerCaseNode);
}