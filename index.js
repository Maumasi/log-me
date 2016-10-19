
const util = require('util');
const clc = require('cli-color');
const stream = console;
try {

  module.exports = (
    error,
    filePath = __filename,
    customMessage = 'none',
    customDescription = 'none',
    reportLevel = 0
  ) => {
    const reportType = ['Info', 'Warning', 'Error'];

    let rpLevel = reportType[reportLevel];
    if (error) {
      rpLevel = reportType[2];
    }

    // build console version of log report

    // log header
    let logHeadColor;
    let logHeadTxt;

    if (error) {
      logHeadColor = clc.xterm(9).bgXterm(7);
      logHeadTxt = clc.blink(`Log Report: ${rpLevel}`);
    } else {
      logHeadColor = clc.xterm(48);
      logHeadTxt = `Log Report: ${rpLevel}`;
    }

    const logHead = clc.bold(clc.underline(logHeadColor(logHeadTxt)));

    // created at
    const createdAtColor =
    `${clc.bold('created at')}: ${clc.cyan(new Date())}`;

    // custom message
    const customMessageColor =
    `${clc.bold('custom message')}: ${clc.cyan(customMessage)}`;

    // customDescription
    const customDescriptionColor =
    `${clc.bold('custom description')}: ${clc.cyan(customDescription)}`;

    // report type
    let reportTypeTxt;
    switch (rpLevel) {
      case 'Info':
        reportTypeTxt = clc.bold(clc.greenBright(rpLevel));
        break;
      case 'Warning':
        reportTypeTxt = clc.bold(clc.yellowBright(rpLevel));
        break;
      case 'Error':
        reportTypeTxt = clc.bold(clc.redBright(rpLevel));
        break;
      default:
        reportTypeTxt = clc.bold(logHeadColor(rpLevel));
    }
    const reportTypeColor =
    `${clc.bold('report type')}: ${reportTypeTxt}`;

    // file path
    const filePathColor =
    `${clc.bold('file path')}: ${clc.magentaBright(filePath)}`;

    // stackTrace
    const stackTraceColor =
    `${clc.bold('stack trace')}: ${util.inspect(error) || null}`;

    const messageBody = `\n
      ${logHead}
      ${createdAtColor}
      ${reportTypeColor}
      ${customMessageColor}
      ${customDescriptionColor}
      ${filePathColor}
      ${stackTraceColor}
    \n`;

    if (process.env.DEBUG) {
      switch (rpLevel) {
        case "Info":
          stream.log(messageBody);
        break;
        case "Warning":
          stream.warn(messageBody);
        break;
        case "Error":
          stream.error(messageBody);
        break;
      }
    }
  };
} catch (e) {
  stream.error(e);
  stream.error('log-me failed');
}
