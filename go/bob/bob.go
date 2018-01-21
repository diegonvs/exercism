package bob

import (
	"strings"
	"unicode"
)

//Hey responds to a greeting like a lackadaisical teenager.
func Hey(remark string) string {

	remark = strings.TrimSpace(remark)

	switch {
	case remark == "":
		return "Fine. Be that way!"
	case containsLetter(remark) && allUpper(remark) && strings.HasSuffix(remark, "?"):
		return "Calm down, I know what I'm doing!"
	case containsLetter(remark) && allUpper(remark):
		return "Whoa, chill out!"
	case strings.HasSuffix(remark, "?"):
		return "Sure."
	default:
		return "Whatever."
	}

}

//Verifies that string is uppercase
func allUpper(s string) bool {
	return strings.ToUpper(s) == s
}

//Verifies that string receive as argument have only letters
func containsLetter(s string) bool {
	for _, letter := range s {
		if unicode.IsLetter(letter) {
			return true
		}
	}
	return false
}
