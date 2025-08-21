bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedstring = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedstring == "AISHAH") {
        basic.showIcon(IconNames.Heart)
    }
    if (receivedstring == "IPHONE") {
        basic.showIcon(IconNames.Giraffe)
    }
})
let receivedstring = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
