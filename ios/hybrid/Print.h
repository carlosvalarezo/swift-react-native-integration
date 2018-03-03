//
//  Print.h
//  hybrid
//
//  Created by Carlos Valarezo Loaiza on 03/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

/*#ifndef Print_h
#define Print_h
#import <React/RCTBridgeModule.h>

@interface Print : NSObject <RCTBridgeModule>
@end

#endif // Print_h */


#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(Print, NSObject)

// Type 1: Calling a Swift function from JavaScript
RCT_EXTERN_METHOD(printJS:(NSString *)name)

@end
