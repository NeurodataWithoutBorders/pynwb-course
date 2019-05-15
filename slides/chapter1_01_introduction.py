# Import utilities for working with dates and times
from datetime import datetime
from dateutil.tz import tzlocal
from pynwb import NWBFile

# Create a datetime object representing the start of the experiment
start_time = datetime(2019, 4, 21, 11, 0, tzinfo=tzlocal())

# Create an NWBFile object
nwbfile = NWBFile(session_description='Mouse Running on Spherical Treadmill',
                  identifier='Mouse314-Running',
                  session_start_time=start_time)

print(nwbfile.session_description)

from pynwb import TimeSeries
from numpy.random import rand # to create some random data

# Generate some random data
data = rand(1000)
timestamps = list(range(1000))

# Create a TimeSeries object
running_speed = TimeSeries(name='RunningSpeed',
                           data=data,
                           unit='m/s',
                           timestamps=timestamps)

nwbfile.add_acquisition(running_speed)

running_speed_read = nwbfile.get_acquisition('RunningSpeed')
print('First running speed:', running_speed_read.data[0], running_speed_read.unit)

from pynwb import NWBHDF5IO

with NWBHDF5IO('example_file_path.nwb', 'w') as io:
    io.write(nwbfile)
