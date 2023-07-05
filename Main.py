"""Binary search algorithm."""
def binary_search(arr, target):
    count = 0 #
    left = 0
    right = len(arr) - 1
    while left <= right:
        count+=1 # using count variable , i want to know how many times the loop is exeuted . 
        mid = int((right + left) / 2)  # Finding the middle index of array.
        if arr[mid] == target:
            print(f'your target is {arr[mid]}')
            break
        elif arr[mid] < target:
            """If element is smaller than mid value then it can only be present in right subarray
            and we update our new `right` pointer to that position minus one so as not to miss any
            occurrence"""
            left = mid + 1

        else:
            """If element is greater than or equal to mid value then it cannot be on its left side
            but may still exist on its right side hence updating our new 'left' pointer with current mid
            +1
            which will help us find this number at some point later down the line"""
            right = mid - 1
    print(count)
    return None
#using the range library , we create an array of sorted numbers .
binary_search(range(1,100),86)