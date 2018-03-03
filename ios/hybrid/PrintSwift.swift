//
//  PrintSwift.swift
//  hybrid
//
//  Created by Carlos Valarezo Loaiza on 03/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

@objc(Print)
class Print: NSObject {
  
  @objc func printJS(_ string: String) {
    print("From swift " + string)
  }
}
