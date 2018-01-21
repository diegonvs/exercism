package gigasecond

import (
	"time"
)

/*AddGigasecond is a function that calculate the date that someone turned or will
celebrate their 1 Gs anniversary.*/
func AddGigasecond(t time.Time) time.Time {
	return t.Add(1E9 * time.Second)
}
