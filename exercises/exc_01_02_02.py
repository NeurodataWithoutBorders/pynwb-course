from pynwb import ____

# Generate some random data
data = [1,1,1,2,2,2,3,3,3]
timestamps = [list(range(13))]

# Create a TimeSeries object
myTimeSeries = ____(name='MyTimeSeries',
                    ____=data,
                    ____='m', # meters
                    ____=timestamps)
print(myTimeSeries.____)
