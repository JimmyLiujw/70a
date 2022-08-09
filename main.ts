function right () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M1B,
    0
    )
}
function Clampclose () {
    robotbit.Servo(robotbit.Servos.S1, MIN1)
    basic.pause(300)
}
function Arm_B_Down () {
    if (currentAngle3 - delta > MIN3) {
        currentAngle3 = currentAngle3 - delta
    }
    robotbit.Servo(robotbit.Servos.S3, currentAngle3)
}
function back () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M1B,
    -150
    )
}
function left () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M1B,
    150
    )
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    }
})
function stop () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M1B,
    0
    )
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
function Arm_A_Up () {
    if (currentAngle2 + delta < MAX2) {
        currentAngle2 = currentAngle2 + delta
    }
    robotbit.Servo(robotbit.Servos.S2, currentAngle2)
}
function Servo_stop () {
	
}
function ClampOpen () {
    robotbit.Servo(robotbit.Servos.S1, MAX1)
    basic.pause(300)
}
function Arm_A_Down () {
    if (currentAngle2 - delta > MIN1) {
        currentAngle2 = currentAngle2 - delta
    }
    robotbit.Servo(robotbit.Servos.S2, currentAngle2)
}
function forward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M1B,
    150
    )
}
function Arm_B_Up () {
    if (currentAngle3 + delta < MAX3) {
        currentAngle3 = currentAngle3 + delta
    }
    robotbit.Servo(robotbit.Servos.S3, currentAngle3)
}
function bluecontrol2 () {
    if (uartData == "F") {
        forward()
    } else if (uartData == "B") {
        back()
    } else if (uartData == "R") {
        right()
    } else if (uartData == "L") {
        left()
    } else if (uartData == "S") {
        stop()
    } else if (uartData == "0") {
        Servo_stop()
        basic.pause(ServoDelayTime)
    } else if (uartData == "1") {
        BottomLeft()
        basic.pause(ServoDelayTime)
    } else if (uartData == "2") {
        BottomRight()
        basic.pause(ServoDelayTime)
    } else if (uartData == "3") {
        Arm_A_Up()
        basic.pause(ServoDelayTime)
    } else if (uartData == "4") {
        Arm_A_Down()
        basic.pause(ServoDelayTime)
    } else if (uartData == "5") {
        Arm_B_Up()
        basic.pause(ServoDelayTime)
    } else if (uartData == "6") {
        Arm_B_Down()
        basic.pause(ServoDelayTime)
    } else if (uartData == "7") {
        ClampOpen()
        basic.pause(ServoDelayTime)
    } else if (uartData == "8") {
        Clampclose()
        basic.pause(ServoDelayTime)
    } else {
    	
    }
}
function BottomRight () {
    if (currentAngle4 - delta_bottom > MIN4) {
        currentAngle4 = currentAngle4 - delta_bottom
    }
    robotbit.Servo(robotbit.Servos.S4, currentAngle4)
}
function BottomLeft () {
    if (currentAngle4 + delta_bottom < MAX4) {
        currentAngle4 = currentAngle4 + delta_bottom
    }
    robotbit.Servo(robotbit.Servos.S4, currentAngle4)
}
let uartData = ""
let connected = 0
let currentAngle4 = 0
let currentAngle3 = 0
let currentAngle2 = 0
let MAX4 = 0
let MIN4 = 0
let MAX3 = 0
let MIN3 = 0
let MAX2 = 0
let MAX1 = 0
let MIN1 = 0
let delta = 0
let delta_bottom = 0
let ServoDelayTime = 0
bluetooth.startUartService()
basic.showString("S")
ServoDelayTime = 50
delta_bottom = 2
delta = 2
MIN1 = 0
MAX1 = 90
let INITANGLE1 = 30
let MIN2 = 10
MAX2 = 140
let INITANGLE2 = 90
MIN3 = 40
MAX3 = 170
let INITANGLE3 = 90
MIN4 = 0
MAX4 = 170
let INITANGLE4 = 90
robotbit.Servo(robotbit.Servos.S1, INITANGLE1)
robotbit.Servo(robotbit.Servos.S2, INITANGLE2)
robotbit.Servo(robotbit.Servos.S3, INITANGLE3)
robotbit.Servo(robotbit.Servos.S4, INITANGLE4)
let currentAngle1 = INITANGLE1
currentAngle2 = INITANGLE2
currentAngle3 = INITANGLE3
currentAngle4 = INITANGLE4
basic.forever(function () {
    bluecontrol2()
})
