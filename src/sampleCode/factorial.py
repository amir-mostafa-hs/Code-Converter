def factorial(n):
    # اگر عدد منفی باشد
    if n < 0:
        return "عدد منفی فاکتوریل ندارد"
    # اگر عدد 0 یا 1 باشد
    elif n == 0 or n == 1:
        return 1
    # برای اعداد بزرگتر از 1
    else:
        fact = 1
        # محاسبه فاکتوریل با حلقه
        for i in range(1, n + 1):
            fact = fact * i
        return fact

# تست برنامه
number = 5
result = factorial(number)
print(f"factorial {number} is equal to: {result}")