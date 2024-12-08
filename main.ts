input.onButtonPressed(Button.A, function () {
    wuKong.stopAllMotor()
})
basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) >= 4) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.No)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 30)
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 4) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Yes)
        wuKong.stopMotor(wuKong.MotorList.M2)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 70)
        basic.pause(1000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 40)
        basic.pause(1000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 70)
        basic.pause(1000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 40)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 15)
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 20)
        basic.pause(2000)
        wuKong.stopMotor(wuKong.MotorList.M1)
    } else {
    	
    }
})
