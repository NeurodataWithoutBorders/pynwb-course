# Create a datetime object representing the current time
from datetime import datetime
from dateutil.tz import tzlocal
start_time = datetime.now(tzlocal())

# Import the NWBFile class
from ____ import ____

nwbfile = ____(____='This is a description for this session',
               ____='Mouse10-Day1',
               ____=start_time)
print('Session ID:', nwbfile.____)
