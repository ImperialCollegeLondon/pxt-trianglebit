#include "trianglebit.h"
#include "MicroBit.h"

MicroBit uBit;
using namespace pxt;
uBit.init();

namespace trianglebit {
	 void testing(){
		uBit.display.scroll("HELLO WORLD");
	 }

}
release_fibre();
