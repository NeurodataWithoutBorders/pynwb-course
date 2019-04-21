---
type: slides
---

# Introduction to NWB

---

# What is NWB?

Neurodata Without Borders, or NWB, is a data standard for neurophysiology. It was developed by a group of neuroscientists and software developers who recognize that adoption of a unified data format is an important step toward breaking down the barriers to data sharing in neuroscience.

---

# Getting started

In this lesson, we will take a look at the most important concepts of NWB and how to get started using it.

NWB files (`.nwb`) can be read and written in Python and MATLAB. This lesson will walk you through how to interact with NWB files in Python. We will use the PyNWB package. 

This lesson assumes you have basic experience programming in Python.

---

# The NWBFile object

`NWBFile` is the core class of PyNWB. It represents the file to which all data and metadata will be stored. 

```python
# Import the NWBFile class
from pynwb import NWBFile

# Create an NWBFile object with some metadata. These arguments are required
nwbfile = NWBFile(session_description='Demonstrate NWBFile basics',
                  identifier='NWB123',
                  session_start_time=None)
```

---

# Setting the session start time

In the previous example, we set the `session_start_time` argument for `NWBFile(...)` to `None`. Let's set a proper time and use as an example, April 21, 2019 at 11:00am in the current timezone.

```python
# Import utilities for working with dates and times
from datetime import datetime
from dateutil.tz import tzlocal

# Create a datetime object representing the start of the experiment
start_time = datetime(2019, 4, 21, 11, 0, tzinfo=tzlocal())

# Create an NWBFile object
nwbfile = NWBFile(session_description='Demonstrate NWBFile basics',
                  identifier='NWB123',
                  session_start_time=start_time)
```

---

# Adding time series data

PyNWB stores time series data using the `TimeSeries` class and its subclasses. The main components of a `TimeSeries` are the `data` and the `timestamps`, in seconds. You will also need to supply the name and unit of measurement for `data`.

Let's randomly generate 1000 data points and create a `TimeSeries` for them.

```python
from pynwb import TimeSeries
from numpy.random import rand # to create some random data

# Generate some random data
data = rand(1000)
timestamps = list(range(1000))

# Create a TimeSeries object
test_ts = TimeSeries(name='A random time series in meters', 
                     data=data, 
                     unit='m', 
                     timestamps=timestamps)
```
---

# Adding the data to the NWBFile

Use the `NWBFile` function `add_acquisition(...)` to add your time series to the `NWBFile` and label it as acquisition data. 

```python
nwbfile.add_acquisition(test_ts)
```

So easy!

---

# Writing the NWB file

Reading and writing of NWB files is handled by the `NWBHDF5IO` class. To write an `NWBFile` object, use the write method.

```python
from pynwb import NWBHDF5IO

with NWBHDF5IO('example_file_path.nwb', 'w') as io:
    io.write(nwbfile)
    io.close()
```

That's it! This code just made a file called `example_file_path.nwb` which contains 1000 random data points and some metadata stored in the NWB format.

---

# Let's practice!

