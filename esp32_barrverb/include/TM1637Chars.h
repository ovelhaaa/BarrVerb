#pragma once

#include <stdint.h>

// 7-segment display layout:
//      A
//     ---
//  F |   | B
//     --- G
//  E |   | C
//     ---
//      D   o DP

namespace TM1637Chars {
    // Array to map ASCII characters (from ' ' space to 'Z') to 7-segment encoding
    // Missing characters default to 0x00 (blank) or an approximation.
    const uint8_t ASCII_TO_7SEG[] = {
        0x00, // 32 ' '
        0x00, // 33 '!'
        0x22, // 34 '"'
        0x00, // 35 '#'
        0x00, // 36 '$'
        0x00, // 37 '%'
        0x00, // 38 '&'
        0x20, // 39 '''
        0x39, // 40 '(' (similar to C)
        0x0F, // 41 ')' (similar to reverse C)
        0x00, // 42 '*'
        0x00, // 43 '+'
        0x04, // 44 ','
        0x40, // 45 '-'
        0x80, // 46 '.'
        0x52, // 47 '/'
        0x3F, // 48 '0'
        0x06, // 49 '1'
        0x5B, // 50 '2'
        0x4F, // 51 '3'
        0x66, // 52 '4'
        0x6D, // 53 '5'
        0x7D, // 54 '6'
        0x07, // 55 '7'
        0x7F, // 56 '8'
        0x6F, // 57 '9'
        0x00, // 58 ':'
        0x00, // 59 ';'
        0x00, // 60 '<'
        0x48, // 61 '='
        0x00, // 62 '>'
        0x53, // 63 '?'
        0x00, // 64 '@'
        0x77, // 65 'A'
        0x7C, // 66 'B' (lowercase b)
        0x39, // 67 'C'
        0x5E, // 68 'D' (lowercase d)
        0x79, // 69 'E'
        0x71, // 70 'F'
        0x3D, // 71 'G'
        0x76, // 72 'H'
        0x30, // 73 'I' (or 0x06)
        0x1E, // 74 'J'
        0x7A, // 75 'K' (approximation)
        0x38, // 76 'L'
        0x37, // 77 'M' (approximation using n)
        0x54, // 78 'N' (lowercase n)
        0x3F, // 79 'O' (or 0x5C for lowercase o)
        0x73, // 80 'P'
        0x67, // 81 'Q' (approximation)
        0x50, // 82 'R' (lowercase r)
        0x6D, // 83 'S' (like 5)
        0x78, // 84 'T' (lowercase t)
        0x3E, // 85 'U'
        0x1C, // 86 'V' (lowercase u)
        0x3F, // 87 'W' (approximation)
        0x76, // 88 'X' (approximation)
        0x6E, // 89 'Y'
        0x5B, // 90 'Z' (like 2)
        0x39, // 91 '['
        0x64, // 92 '\'
        0x0F, // 93 ']'
        0x00, // 94 '^'
        0x08, // 95 '_'
    };

    inline uint8_t charToSegment(char c) {
        if (c >= 'a' && c <= 'z') {
            c -= 32; // Convert lowercase to uppercase for mapping
        }
        if (c >= 32 && c <= 95) {
            return ASCII_TO_7SEG[c - 32];
        }
        return 0x00; // Blank for unmapped characters
    }
}
