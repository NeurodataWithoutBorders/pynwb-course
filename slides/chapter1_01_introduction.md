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

NWB files (`.nwb`) can be read and written in Python and MATLAB. This lesson will walk you through how to interact with NWB files in **Python**. We will use the **PyNWB** package.

This lesson requires only basic experience programming in Python.

---

# The NWBFile object

`NWBFile` is the core class of PyNWB. It represents the file to which all data and metadata will be stored. It is recommended to use a single `NWBFile` to contain all data related to a single experimental session.

```python
# Import the NWBFile class
from pynwb import NWBFile

# Create an NWBFile object with some metadata. These arguments are required
nwbfile = NWBFile(session_description='Mouse Running on Spherical Treadmill',
                  identifier='Mouse314-Running',
                  session_start_time=None)
```

---

# Setting the session start time

In the previous example, we set the `session_start_time` argument for the `NWBFile` constructor to `None`. That's actually not allowed. Storing times properly is important for understanding most neurophysiology data. In an NWB file, timestamps are stored relative to a defined, shared starting time. You could define it as the time that data acquisition began for this session, or a more global start time, such as January 1, 1970 (the Unix time reference). The latter works better if you plan to combine data from multiple sessions into a single file.

Let's set the `session_start_time` argument to April 21, 2019 at 11:00am in the current timezone.

```python
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
```

---

# Accessing NWBFile fields

To access the metadata variables of an `NWBFile`, such as the session description or the identifier, simply use the 'dot' notation:

```python
print(nwbfile.session_description)
```
```out
Mouse Running on Spherical Treadmill
```

---

# Adding time series data

Neurophysiology data often consists of values that vary over time, or time series data, such as voltages, fluorescence intensities, or behavioral measures. PyNWB stores time series data using the `TimeSeries` class and its specialized subclasses. To create a `TimeSeries` object, you need to pass the following as arguments to the constructor: a `name`, the `data`, the `unit` of measurement, and `timestamps` for each data point, in seconds.

Let's create a `TimeSeries` object to represent a mouse's running speed, in meters/second, using randomly generated values for 1000 time points.

```python
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
```
---

# Adding the data to the NWBFile

Use the `NWBFile` method `add_acquisition` to add your time series to the `NWBFile` and label it as acquisition data.

```python
nwbfile.add_acquisition(running_speed)
```

---

# Accessing acquisition data of the NWBFile

Accessing data stored in the `NWBFile` is about as easy as accessing metadata stored in the `NWBFile`. Since an `NWBFile` can have multiple acquisition data, use the `NWBFile` method `get_acquisition` and pass the name of the `TimeSeries` that you want to access.

```python
running_speed_read = nwbfile.acquisition['RunningSpeed']
print('First running speed:', running_speed_read.data[0], running_speed_read.unit)
```
```out
0.5596276463909797 m/s
```

---

# Writing the NWB file

Writing and reading of NWB files is handled by the `NWBHDF5IO` class (read as NWB-HDF5-IO). To write an `NWBFile` object, create a new instance of `NWBHDF5IO` with the filename that you want to write to. You also have to specify that you want to write to the file using the 'w' argument (use 'r' to open the file for reading). Then, use the `write` method on your `NWBFile` object.

```python
from pynwb import NWBHDF5IO

with NWBHDF5IO('example_file_path.nwb', 'w') as io:
    io.write(nwbfile)
```

That's it! All together, this code makes an NWB file called `example_file_path.nwb` containing a mouse's running speed for 1000 seconds as well as structured metadata associated with this experimental session.

---

# Let's practice!
