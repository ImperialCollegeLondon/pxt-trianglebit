/**
 * Pins used to generate events
 */
enum TBPins {
    //% block="button1"
    Button1 = <number>DAL.MICROBIT_ID_IO_P12,
    //% block="button2"
    Button2 = DAL.MICROBIT_ID_IO_P16,
    //% block="button3"
    Button3 = DAL.MICROBIT_ID_IO_P14,
    //% block="button4"
    Button4 = DAL.MICROBIT_ID_IO_P15,
    //% block="joystick1"
    Joystick1 = DAL.MICROBIT_ID_IO_P8
}

/**
 * Button events
 */
enum TBEvents {
    //% block="high"
    High = DAL.MICROBIT_BUTTON_EVT_UP,
    //% block="low"
    Low = DAL.MICROBIT_BUTTON_EVT_DOWN
}

/**
  * Enumeration of buttons
  */
enum TBButtons {
    //% block="button1"
    Button1,
    //% block="button2"
    Button2,
    //% block="button3"
    Button3,
    //% block="button4"
    Button4,
    //% block="joystick1"
    Joystick1
}

/**
  * Enumeration of joystick axes
  */
enum TBJoystick {
    //% block="x"
    X,
    //% block="y"
    Y
}

/**
  * Update mode for LEDs
  * setting to Manual requires show LED changes blocks
  * setting to Auto will update the LEDs everytime they change
  */
enum TBMode
{
    Manual,
    Auto
}

/**
  * Pre-Defined LED colours
  */
enum TBColors
{
    //% block=red
    Red = 0xff0000,
    //% block=orange
    Orange = 0xffa500,
    //% block=yellow
    Yellow = 0xffff00,
    //% block=green
    Green = 0x00ff00,
    //% block=blue
    Blue = 0x0000ff,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xff00ff,
    //% block=white
    White = 0xffffff,
    //% block=black
    Black = 0x000000
}

/**
 * Custom blocks
 */
//% weight=10 color=#F47442 icon="\uf11b"
namespace trianglebit
{
    /**
      * Registers event code
      */
    //% weight=90
    //% blockId=tb_onevent block="on %button|%event"
    //% subcategory=Inputs
    //% group=Inputs
    export function onEvent(button: TBPins, event: TBEvents, handler: Action)
    {
        
    }


    /**
    *	Send string through BLE
    *
    //% block
    //% subcategory=Inputs
    //% group=Inputs
    //% text.defl="enter string"
    export function sendstr(text: string){
    //send string
    }

    //% block
    //% subcategory=Inputs
    //% group=Inputs
    export function testing(){
    }

    }
