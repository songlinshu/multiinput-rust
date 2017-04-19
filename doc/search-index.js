var searchIndex = {};
searchIndex["multiinput"] = {"doc":"rawinput library for rust development on windows","items":[[0,"event","multiinput","",null,null],[4,"State","multiinput::event","State of a Key or Button",null,null],[13,"Pressed","","",0,null],[13,"Released","","",0,null],[4,"KeyId","","Key Identifier",null,null],[13,"Escape","","",1,null],[13,"Return","","",1,null],[13,"Backspace","","",1,null],[13,"Left","","",1,null],[13,"Right","","",1,null],[13,"Up","","",1,null],[13,"Down","","",1,null],[13,"Space","","",1,null],[13,"A","","",1,null],[13,"B","","",1,null],[13,"C","","",1,null],[13,"D","","",1,null],[13,"E","","",1,null],[13,"F","","",1,null],[13,"G","","",1,null],[13,"H","","",1,null],[13,"I","","",1,null],[13,"J","","",1,null],[13,"K","","",1,null],[13,"L","","",1,null],[13,"M","","",1,null],[13,"N","","",1,null],[13,"O","","",1,null],[13,"P","","",1,null],[13,"Q","","",1,null],[13,"R","","",1,null],[13,"S","","",1,null],[13,"T","","",1,null],[13,"U","","",1,null],[13,"V","","",1,null],[13,"W","","",1,null],[13,"X","","",1,null],[13,"Y","","",1,null],[13,"Z","","",1,null],[13,"Zero","","",1,null],[13,"One","","",1,null],[13,"Two","","",1,null],[13,"Three","","",1,null],[13,"Four","","",1,null],[13,"Five","","",1,null],[13,"Six","","",1,null],[13,"Seven","","",1,null],[13,"Eight","","",1,null],[13,"Nine","","",1,null],[13,"Shift","","",1,null],[13,"LeftCtrl","","",1,null],[13,"RightCtrl","","",1,null],[13,"LeftAlt","","",1,null],[13,"RightAlt","","",1,null],[13,"CapsLock","","",1,null],[13,"Pause","","",1,null],[13,"PageUp","","",1,null],[13,"PageDown","","",1,null],[13,"PrintScreen","","",1,null],[13,"Insert","","",1,null],[13,"End","","",1,null],[13,"Home","","",1,null],[13,"Delete","","",1,null],[13,"Add","","",1,null],[13,"Subtract","","",1,null],[13,"Multiply","","",1,null],[13,"Separator","","",1,null],[13,"Decimal","","",1,null],[13,"Divide","","",1,null],[4,"MouseButton","","Mouse Buttons",null,null],[13,"Left","","",2,null],[13,"Right","","",2,null],[13,"Middle","","",2,null],[13,"Button4","","",2,null],[13,"Button5","","",2,null],[4,"Axis","","",null,null],[13,"X","","",3,null],[13,"Y","","",3,null],[13,"Z","","",3,null],[13,"RX","","",3,null],[13,"RY","","",3,null],[13,"RZ","","",3,null],[4,"RawEvent","","Event types",null,null],[13,"MouseButtonEvent","","",4,null],[13,"MouseMoveEvent","","",4,null],[13,"MouseWheelEvent","","",4,null],[13,"KeyboardEvent","","",4,null],[13,"JoystickButtonEvent","","",4,null],[13,"JoystickAxisEvent","","",4,null],[13,"JoystickHatSwitchEvent","","",4,null],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"state"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"state"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"keyid"}],"output":{"name":"bool"}}],[11,"hash","","",1,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"keyid"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"mousebutton"}],"output":{"name":"bool"}}],[11,"hash","","",2,null],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"mousebutton"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"axis"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"rawevent"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"manager","multiinput","",null,null],[3,"DeviceStats","multiinput::manager","",null,null],[12,"number_of_mice","","",5,null],[12,"number_of_keyboards","","",5,null],[12,"number_of_joysticks","","",5,null],[3,"RawInputManager","","Manages Raw Input Processing",null,null],[4,"DeviceType","","Types of Raw Input Device",null,null],[13,"Mice","","",6,null],[13,"Keyboards","","",6,null],[13,"Joysticks","","",6,null],[4,"XInputInclude","","Denotes if Xbox360 controllers should be used Please Note: Rawinput support for official Xbox360 controllers is very limited (triggers share same axis, no support for rumble or the central X button) Please see https://en.wikipedia.org/wiki/DirectInput#Xbox_360_Controller_support for more details",null,null],[13,"True","","",7,null],[13,"False","","",7,null],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"devicetype"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"self"},{"name":"devicetype"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"devicetype"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"xinputinclude"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"xinputinclude"}}],[11,"default","","",5,{"inputs":[],"output":{"name":"devicestats"}}],[11,"new","","",8,{"inputs":[],"output":{"name":"result"}}],[11,"register_devices","","Allows Raw Input devices of type device_type to be received from the Input Manager",8,{"inputs":[{"name":"self"},{"name":"devicetype"}],"output":null}],[11,"get_event","","Get Event from the Input Manager",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"get_joystick_state","","Get Joystick State from the Input Manager",8,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"print_device_list","","Print List of Potential Input Devices",8,{"inputs":[{"name":"self"}],"output":null}],[11,"get_device_stats","","Get Device Stats (number of connected devices)",8,{"inputs":[{"name":"self"}],"output":{"name":"devicestats"}}],[11,"drop","","",8,{"inputs":[{"name":"self"}],"output":null}]],"paths":[[4,"State"],[4,"KeyId"],[4,"MouseButton"],[4,"Axis"],[4,"RawEvent"],[3,"DeviceStats"],[4,"DeviceType"],[4,"XInputInclude"],[3,"RawInputManager"]]};
searchIndex['multiinput'] = {"items":[[0,"","multiinput","rawinput library for rust development on windows",null,null],[0,"event","","",null,null],[4,"State","multiinput::event","State of a Key or Button",null,null],[13,"Pressed","","",0,null],[13,"Released","","",0,null],[4,"KeyId","","Key Identifier",null,null],[13,"Escape","","",1,null],[13,"Return","","",1,null],[13,"Backspace","","",1,null],[13,"Left","","",1,null],[13,"Right","","",1,null],[13,"Up","","",1,null],[13,"Down","","",1,null],[13,"Space","","",1,null],[13,"A","","",1,null],[13,"B","","",1,null],[13,"C","","",1,null],[13,"D","","",1,null],[13,"E","","",1,null],[13,"F","","",1,null],[13,"G","","",1,null],[13,"H","","",1,null],[13,"I","","",1,null],[13,"J","","",1,null],[13,"K","","",1,null],[13,"L","","",1,null],[13,"M","","",1,null],[13,"N","","",1,null],[13,"O","","",1,null],[13,"P","","",1,null],[13,"Q","","",1,null],[13,"R","","",1,null],[13,"S","","",1,null],[13,"T","","",1,null],[13,"U","","",1,null],[13,"V","","",1,null],[13,"W","","",1,null],[13,"X","","",1,null],[13,"Y","","",1,null],[13,"Z","","",1,null],[13,"Zero","","",1,null],[13,"One","","",1,null],[13,"Two","","",1,null],[13,"Three","","",1,null],[13,"Four","","",1,null],[13,"Five","","",1,null],[13,"Six","","",1,null],[13,"Seven","","",1,null],[13,"Eight","","",1,null],[13,"Nine","","",1,null],[13,"Shift","","",1,null],[13,"LeftCtrl","","",1,null],[13,"RightCtrl","","",1,null],[13,"LeftAlt","","",1,null],[13,"RightAlt","","",1,null],[13,"CapsLock","","",1,null],[13,"Pause","","",1,null],[13,"PageUp","","",1,null],[13,"PageDown","","",1,null],[13,"PrintScreen","","",1,null],[13,"Insert","","",1,null],[13,"End","","",1,null],[13,"Home","","",1,null],[13,"Delete","","",1,null],[13,"Add","","",1,null],[13,"Subtract","","",1,null],[13,"Multiply","","",1,null],[13,"Separator","","",1,null],[13,"Decimal","","",1,null],[13,"Divide","","",1,null],[4,"MouseButton","","Mouse Buttons",null,null],[13,"Left","","",2,null],[13,"Right","","",2,null],[13,"Middle","","",2,null],[13,"Button4","","",2,null],[13,"Button5","","",2,null],[4,"Axis","","",null,null],[13,"X","","",3,null],[13,"Y","","",3,null],[13,"Z","","",3,null],[13,"RX","","",3,null],[13,"RY","","",3,null],[13,"RZ","","",3,null],[4,"RawEvent","","Event types",null,null],[13,"MouseButtonEvent","","",4,null],[13,"MouseMoveEvent","","",4,null],[13,"MouseWheelEvent","","",4,null],[13,"KeyboardEvent","","",4,null],[13,"JoystickButtonEvent","","",4,null],[13,"JoystickAxisEvent","","",4,null],[13,"JoystickHatSwitchEvent","","",4,null],[11,"fmt","","",0,{"inputs":[{"name":"state"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"state"}],"output":{"name":"state"}}],[11,"fmt","","",1,{"inputs":[{"name":"keyid"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"keyid"}],"output":{"name":"keyid"}}],[11,"fmt","","",2,{"inputs":[{"name":"mousebutton"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"mousebutton"}],"output":{"name":"mousebutton"}}],[11,"fmt","","",3,{"inputs":[{"name":"axis"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"axis"}],"output":{"name":"axis"}}],[11,"fmt","","",4,{"inputs":[{"name":"rawevent"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"rawevent"}],"output":{"name":"rawevent"}}],[0,"manager","multiinput","",null,null],[3,"RawInputManager","multiinput::manager","Manages Raw Input Processing",null,null],[4,"DeviceType","","Types of Raw Input Device",null,null],[13,"Mice","","",5,null],[13,"Keyboards","","",5,null],[13,"Joysticks","","",5,null],[11,"clone","","",5,{"inputs":[{"name":"devicetype"}],"output":{"name":"devicetype"}}],[11,"eq","","",5,{"inputs":[{"name":"devicetype"},{"name":"devicetype"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"devicetype"},{"name":"devicetype"}],"output":{"name":"bool"}}],[11,"new","","",6,{"inputs":[{"name":"rawinputmanager"}],"output":{"name":"result"}}],[11,"register_devices","","Allows Raw Input devices of type device_type to be received from the Input Manager",6,{"inputs":[{"name":"rawinputmanager"},{"name":"devicetype"}],"output":null}],[11,"get_event","","Get Event from the Input Manager",6,{"inputs":[{"name":"rawinputmanager"}],"output":{"name":"option"}}],[11,"get_joystick_state","","Get Event from the Input Manager",6,{"inputs":[{"name":"rawinputmanager"},{"name":"usize"}],"output":{"name":"option"}}],[11,"print_device_list","","Print List of Potential Input Devices",6,{"inputs":[{"name":"rawinputmanager"}],"output":null}],[11,"drop","","",6,{"inputs":[{"name":"rawinputmanager"}],"output":null}]],"paths":[[4,"State"],[4,"KeyId"],[4,"MouseButton"],[4,"Axis"],[4,"RawEvent"],[4,"DeviceType"],[3,"RawInputManager"]]};
initSearch(searchIndex);
