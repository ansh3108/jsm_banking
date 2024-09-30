import pyautogui
import time

a= int(input("no. of messages: "))
b=input("type your message: ")

time.sleep(5)

for i in range(a):
    pyautogui.write(a)
    pyautogui.press('enter')
    
print("Completed")