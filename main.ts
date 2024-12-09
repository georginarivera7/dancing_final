input.onButtonPressed(Button.A, function () {
    wuKong.stopAllMotor()
})
basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) >= 4) {
        for (let index = 0; index < 1; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
            basic.showIcon(IconNames.No)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, 28)
            basic.pause(5000)
            basic.pause(2000)
            break;
        }
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 0) {
        for (let index = 0; index < 1; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.LoopingInBackground)
            basic.showIcon(IconNames.Yes)
            wuKong.stopMotor(wuKong.MotorList.M2)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 70)
            basic.pause(2000)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 40)
            basic.pause(5000)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 70)
            basic.pause(2000)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 40)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 15)
            basic.pause(5000)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 20)
            basic.pause(5000)
            wuKong.stopMotor(wuKong.MotorList.M1)
            break;
        }
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) >= 4) {
        for (let index = 0; index < 1; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
            basic.showIcon(IconNames.No)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, 22)
            basic.pause(2000)
            basic.pause(2000)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.LoopingInBackground)
            basic.pause(2000)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, 25)
            basic.pause(2000)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 30)
            basic.pause(2000)
            wuKong.stopMotor(wuKong.MotorList.M1)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
            break;
        }
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 4) {
        for (let index = 0; index < 1; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.LoopingInBackground)
            basic.showIcon(IconNames.Yes)
            wuKong.stopMotor(wuKong.MotorList.M2)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 70)
            basic.pause(5000)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 40)
            basic.pause(5000)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 70)
            basic.pause(5000)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 40)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 15)
            basic.pause(2000)
            wuKong.stopMotor(wuKong.MotorList.M1)
            break;
        }
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) >= 4) {
        for (let index = 0; index < 1; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.No)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 35)
            basic.pause(5000)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, 45)
            basic.pause(5000)
            break;
        }
    }
})
