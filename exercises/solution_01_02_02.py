from pynwb import TimeSeries

# Generate some random data
data = [1,1,1,2,2,2,3,3,3]
timestamps = [list(range(13))]

# Create a TimeSeries object
myTimeSeries = TimeSeries(name='MyTimeSeries',
                          data=data,
                          unit='m',  # meters
                          timestamps=timestamps)
print(myTimeSeries.data)
