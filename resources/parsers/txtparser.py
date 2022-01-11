#! /usr/bin/python3

import os
import json
import time
import sys

def convert(file, endPath):
    #path = os.path.abspath("book.txt")

    f = open(file, "r", encoding='utf-8', errors='ignore')
    lines = f.readlines()

    blocks = []

    for line_num in range(0, len(lines)):
        if lines[line_num] != '\n':
            blocks.append( {
                                "type": "paragraph",
                                "data": {
                                    "text": lines[line_num]
                                }
                            })

    c_time = int(time.time())

    result = {
        "time": c_time,
        "blocks": blocks
    }

    writeFile(result, endPath)

def writeFile(result, dir):

    if not os.path.exists(dir):
        os.makedirs(dir)

    with open(dir + '/text.json', 'w') as fp:
        json.dump(result, fp)



if __name__ == "__main__":
    if len (sys.argv) > 1:
        convert(sys.argv[1], sys.argv[2])