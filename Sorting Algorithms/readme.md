Sorting is a process of rearranging of data in a specific way so they appear to be in order. e.g. sorting from smallest to the largest number.

The most basic way of sorting in JS is the in-built JS function.
In this method, every element is converted to a string and then sorted according to the unicode.
It works well on the string and char but not on num.
It accepts an optional comparator function.
You can use this comparator to tell JS how to sort it.
The comparator function looks at the pair of elements (a&b), determines their sort order based on a return value
* if the return value is a -ve number, a comes before b
* if the return value is a +ve number, b comes bfroe a .
* if return is 0, no sorting is done.
