
def isPalindrome(x):

    xString = str(x)
   
    xArray = list(xString)
    
    xArray.reverse()
    xReversed =  ''.join(xArray)

    if xReversed == xString:
        return True
    else:
        return False
        
isPalindrome(121)