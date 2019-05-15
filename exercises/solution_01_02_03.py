# assume imports have been done and missing variables have been set

nwbfile = NWBFile(session_description='A description for this session',
                  identifier='Mouse10-Day1',
                  session_start_time=start_time)

myTimeSeries = TimeSeries(name='MyTimeSeries',
                          data=data,
                          unit='m',  # meters
                          timestamps=timestamps)

nwbfile.add_acquisition(myTimeSeries)

print(nwbfile.acquisition['MyTimeSeries'])  # print the time series object
