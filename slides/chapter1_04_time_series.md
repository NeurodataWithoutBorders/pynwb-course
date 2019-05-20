---
type: slides
---

# Adding data

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
First running speed: 0.5596276463909797 m/s
```

# Inspecting a NWBFile

We can inspect the `NWBFile` object at a high level by simply printing out the
object.

```python
print(nwbfile)
```
```out
root <class 'pynwb.file.NWBFile'>
Fields:
  acquisition: { RunningSpeed <class 'pynwb.base.TimeSeries'> }
  analysis: { }
  devices: { }
  electrode_groups: { }
  epoch_tags: {}
  ic_electrodes: { }
  imaging_planes: { }
  lab_meta_data: { }
  ogen_sites: { }
  processing_modules: { }
  stimulus: { }
  stimulus_template: { }
  time_intervals: { }
```

---

# Let's practice!
