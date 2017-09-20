## Usage

1. Add any new corrections as a line entry to `corrections.txt`.
2. Run `.gen.sh`.
3. Import `corrections.csv` into [aText](https://www.trankynam.com/atext/)
4. Remove any duplicates in aText


*Note:* Corrections should not use commas or any other characters that may cause problems in CSV files. This is a simple bash script and in the future may need to be ported to a real programming language for speed and to handle more character combinations.

Also check out [AutoSpell](https://github.com/wburningham/AutoSpell). I've moved away from it because I wanted my spelling corrections to occur in all applications, but it is still useful. Maybe one day I'll have a single repo that store a map of corrections and generates outputs and plugins that can be used in a variety of situations.