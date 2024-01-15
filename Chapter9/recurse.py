def sum_1_to_n(x):
    if x == 1:
        return 1
    # print(x + sum_1_to_n(x-1))
    print("----------------")
    return x + sum_1_to_n(x-1)

sum_1_to_n(3)
