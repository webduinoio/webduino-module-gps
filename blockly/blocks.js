Blockly.Blocks['gps_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_GPS_RX)
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "rx_")
      .appendField(Blockly.Msg.WEBDUINO_GPS_TX)
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "tx_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#ohq8mv
Blockly.Blocks['gps_read'] = {
  init: function () {
    this.appendValueInput("qryTime")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("gps"), "gps")
      .appendField(Blockly.Msg.WEBDUINO_GPS_GET_CORD);
      .appendField(Blockly.Msg.WEBDUINO_GPS_EVERY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_GPS_RUN_EVERY_MS);
    this.appendStatementInput("callback")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_GPS_DO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['gps_get_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("gps"), "gps")
        .appendField(Blockly.Msg.WEBDUINO_GPS_CURRENT_VALUE)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.WEBDUINO_GPS_CURRENT_LONGITUDE, "longitude"],
          [Blockly.Msg.WEBDUINO_GPS_CURRENT_LATITUDE, "latitude"],
          [Blockly.Msg.WEBDUINO_GPS_CURRENT_DATE, "date"],
          [Blockly.Msg.WEBDUINO_GPS_CURRENT_TIME, "time"]
        ]), "dataType");
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};