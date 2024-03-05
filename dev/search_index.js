var documenterSearchIndex = {"docs":
[{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"EditURL = \"../../../literate/reference/BIDS.jl\"","category":"page"},{"location":"generated/reference/BIDS/#Brain-Imaging-Data-Structure","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"","category":"section"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"If you are using UnfoldBIDS we assume you are already familiar with the BIDS format. However, since the package only works if your dataset is BIDS formatted, here is a quick reminder. If you want a more in-depth explanation, please refer to the official BIDS documentation","category":"page"},{"location":"generated/reference/BIDS/#Folder-Structure","page":"Brain Imaging Data Structure","title":"Folder Structure","text":"","category":"section"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"Folders have to follow the following structure:","category":"page"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"  |-BIDS-Root/\n      |--- [required meta files]\n      |--- sub-<label>/\n          |--- eeg/\n              |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_eeg.<extension>\n              |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_eeg.json\n              |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_events.json\n              |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_events.tsv\n      |--- derivatives/ <- for (pre-processed data)\n         |--- [required meta files]\n         |--- sub-<label>/\n              |--- eeg/\n                  |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_eeg.<extension>\n                  |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_eeg.json\n                  |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_events.json\n                  |--- sub-<label>[_ses-<label>]_task-<label>[_acq-<label>][_run-<index>]_events.tsv","category":"page"},{"location":"generated/reference/BIDS/#File-formats","page":"Brain Imaging Data Structure","title":"File formats","text":"","category":"section"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"By BIDS standard your files have to be in one of the following formats: EEG","category":"page"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"edf (European Data Fromat; single file)\nvhdr (BrainVision format; file triplet of .vhdr, .vmrk and .eeg)\nset (EEGLAB saved file; .fdt file optional)\nfif (MNE save file; not BIDS conform, but implemented for convenience)","category":"page"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"Events UnfoldBIDS.jl will automatically try to load accompanying events.tsv files. Loading events from the EEG data files is currently not supported, and not BIDS conform.","category":"page"},{"location":"generated/reference/BIDS/#BIDS-Transformation","page":"Brain Imaging Data Structure","title":"BIDS Transformation","text":"","category":"section"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"If your dataset is not yet BIDS conform you can use MNE-BIDS to transform your data.","category":"page"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"","category":"page"},{"location":"generated/reference/BIDS/","page":"Brain Imaging Data Structure","title":"Brain Imaging Data Structure","text":"This page was generated using Literate.jl.","category":"page"},{"location":"generated/reference/overview/","page":"Overview: Toolbox Functions","title":"Overview: Toolbox Functions","text":"EditURL = \"../../../literate/reference/overview.jl\"","category":"page"},{"location":"generated/reference/overview/#Toolbox-overview","page":"Overview: Toolbox Functions","title":"Toolbox overview","text":"","category":"section"},{"location":"generated/reference/overview/","page":"Overview: Toolbox Functions","title":"Overview: Toolbox Functions","text":"","category":"page"},{"location":"generated/reference/overview/","page":"Overview: Toolbox Functions","title":"Overview: Toolbox Functions","text":"This page was generated using Literate.jl.","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"EditURL = \"../../../literate/tutorials/quickstart.jl\"","category":"page"},{"location":"generated/tutorials/quickstart/#1.-Quickstart","page":"Quickstart","title":"1. Quickstart","text":"","category":"section"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"using UnfoldBIDS","category":"page"},{"location":"generated/tutorials/quickstart/#Loading-data","page":"Quickstart","title":"Loading data","text":"","category":"section"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"To load use UnfoldBIDS to find the paths to all subject specific data you can uye the bidsLayout function:","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"path_to_bids_root = \"/store/data/2023EEGManyLabs\"\nlayout_df = bidsLayout(path_to_bids_root, derivative=false)","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"This will give you a DataFrame containing the paths too the eeg files of all subjects plus their accompanying event files","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"note: Note\nSince we set the derivative keyword to false here UnfoldBIDS will only look for the raw EEG files. However, by default UnfoldBIDS assumes you have preprocessed data in a derivatives folder and try to look for those.","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"Subsequently, you can load the data of all subjects into memory","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"eeg_df = load_bids_eeg_data(layout_df)","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"note: Note\nThe data is not actually loaded into memory, but uses MNE's lazy loading functionality.","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"Lastly, current functionality only supports explicit loading of the events. In the future this will be done automatically with the previous step.","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"events_df = load_events(layoutDF)","category":"page"},{"location":"generated/tutorials/quickstart/#Run-unfold-type-models","page":"Quickstart","title":"Run unfold type models","text":"","category":"section"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"resultsAll = runUnfold(eeg_df, events_df, bfDict; channels=nothing, eventcolumn=\"trial_type\")","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"","category":"page"},{"location":"generated/tutorials/quickstart/","page":"Quickstart","title":"Quickstart","text":"This page was generated using Literate.jl.","category":"page"},{"location":"generated/HowTo/ApplyPreprocessing/","page":"Apply preprocessing functions","title":"Apply preprocessing functions","text":"EditURL = \"../../../literate/HowTo/ApplyPreprocessing.jl\"","category":"page"},{"location":"generated/HowTo/ApplyPreprocessing/#Apply-MNE-preprocessing","page":"Apply preprocessing functions","title":"Apply MNE preprocessing","text":"","category":"section"},{"location":"generated/HowTo/ApplyPreprocessing/","page":"Apply preprocessing functions","title":"Apply preprocessing functions","text":"","category":"page"},{"location":"generated/HowTo/ApplyPreprocessing/","page":"Apply preprocessing functions","title":"Apply preprocessing functions","text":"This page was generated using Literate.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = UnfoldBIDS","category":"page"},{"location":"#UnfoldBIDS","page":"Home","title":"UnfoldBIDS","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for UnfoldBIDS.","category":"page"}]
}
