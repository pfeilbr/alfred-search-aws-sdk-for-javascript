# alfred-search-aws-sdk-for-javascript

* search [AWS SDK for JavaScript v2](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html) from [Alfred](https://www.alfredapp.com/)
* works with [AWS SDK for JavaScript v2](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html)
* open documentation link in default browser
* forked from [SamVerschueren/alfred-aws](https://github.com/SamVerschueren/alfred-aws)

---

<img src="https://www.evernote.com/l/AAFaRIMMNSlF2IXYpKA4_ynFbrNVloyKbjUB/image.png" width="600px" />

---

## Install

* follow [alfy#usage instructions](https://github.com/sindresorhus/alfy#usage)
* symlink workflow directory to here
  ```
  # example
  cd /Users/pfeilbr/Dropbox/Alfred/Alfred.alfredpreferences/workflows
  ln -s ~/projects/alfred-search-aws-sdk-for-javascript user.workflow.3AFB139F-7BE0-4430-9EE4-36FCD4B2376D
  ```

---

## Usage

In Alfred, type `awssdk`, <kbd>Enter</kbd>, and your query.

Select an item and press <kbd>Enter</kbd> to go to the AWS SDK documentation page.<br>
Press <kbd>Shift</kbd> to view the documentaion in Quick Look.

---

## To update to latest aws-sdk

```sh
# update to latest or specified version `aws-sdk`
npm install aws-sdk

# update `data.json` from local `aws-sdk` npm package
# it reads service metadata .json files from `./node_modules/aws-sdk/apis`
npm run generate-data
```

---

## Resources

* [SamVerschueren/alfred-aws](https://github.com/SamVerschueren/alfred-aws)
* [sindresorhus/alfy](https://github.com/sindresorhus/alfy)