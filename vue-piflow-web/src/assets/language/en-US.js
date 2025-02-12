module.exports = {
    title: "PiFlow Big Data Pipeline System",
    logOut: 'Log out',
    sidebar: {
        dashboard: "Dashboard",
        flow: "Flow",
        group: "Group",
        processes: "Process",
        template: "Template",
        data_source: "DataSource",
        schedule: "Schedule",
        stopHub: "StopHub",
        sparkJar: "SparkJar",
        testData: "TestData",
        example: "Example",
        admin: "Admin",
        admin_schedule: 'Schedule',
        stopsComponent: 'StopsComponent'
    },
    page: {
        prev_text: "Previous",
        next_text: "Next"
    },
    index: {
        cpu: "cores",
        loading: "Loading..."
    },
    tip: {
        title: "PiFlow system tips",
        existed: "UserName Existed！",
        fault_content: "An unknown error occurred in the background run！",
        update_success_content: "update succeeded！",
        update_fail_content: "update failed！",
        save_success_content: "template saved successfully！",
        save_fail_content: "template save failed！",
        add_success_content: "added succeeded！",
        add_fail_content: "add failed！",
        run_success_content: "run succeeded！",
        run_fail_content: "run failed！",
        mount_success_content: "mount succeeded！",
        mount_fail_content: "mount failed！",
        stop_success_content: "stop succeeded！",
        stop_fail_content: "stop failed！",
        unmount_success_content: "unmount succeeded！",
        unmount_fail_content: "unmount failed！",
        get_success_content: "Data acquisition successful！",
        get_fail_content: "Data acquisition failed！",
        debug_success_content: "debug succeeded！",
        debug_fail_content: "debug failed！",
        delete_success_content: "deleted successfully！",
        delete_fail_content: "deletion failed！",
        request_fail_content: "Data request failed！",

        upload_success_content: "Template upload successful！",
        upload_fail_content: "Template upload failed！",
        download_success_content: "download successful！",
        download_fail_content: "download failed！",

        data_fail_content: "Data acquisition failed！",
    },
    modal: {
        placeholder: "please enter the content...",
        template_title: "Template name",
        ok_text: "Submit",
        upload_text: "upload",
        confirm: "Confirm",
        cancel_text: "Cancel",
        delete_content: "Are you sure to delete",
        cancel_content: "Are you sure you want to cancel this creation"
    },
    flow_columns: {
        create_title: "Create Flow",
        update_title: "Update Flow",
        flow_name: "FlowName",
        driverMemory: "DriverMemory",
        executorNumber: "ExecutorNumber",
        executorMemory: "ExecutorMemory",
        executorCores: "ExecutorCores",
        name: "Name",
        description: "Description",
        CreateTime: "CreateTime",
        action: "Actions"
    },
    group_columns: {
        create_title: "Create Group",
        update_title: "Update Group",
        group_name: "GroupName",
        name: "Name",
        description: "Description",
        CreateTime: "CreateTime",
        action: "Actions"
    },
    progress_columns: {
        progress: "Progress",
        endTime: "EndTime",
        startTime: "StartTime",
        processType: "ProcessType",
        description: "Description",
        id: "ProcessGroupId",
        name: "Name",
        state: "State",
        action: "Actions"
    },
    template_columns: {
        name: "Name",
        crtDttm: "CreateTime",
        action: "Actions"
    },
    dataSource_columns: {
        create_title: "Create DataSource",
        update_title: "Update DataSource",
        type: "Type",
        dataSource_name: "Name",
        addProperty: "AddProperty",
        name: "Name",
        description: "Description",
        CreateTime: "CreateTime",
        dataSourceType: "DataSourceType",
        action: "Actions",
        isLinked: "Do you synchronize the changes? Related components are："
    },
    schedule_columns: {
        create_title: "Create Schedule",
        update_title: "Update Schedule",
        scheduleType: "Schedule Type",
        startDate: "StartDate",
        endDate: "EndDate",
        flowIsGroup: "Flow / Group",
        cron: "Cron",
        type:'Type',
        name: "Name",
        StartTime:"StartTime",
        EndTime:"EndTime",
        status: "Status",
        action: "Actions"
    },
    StopHub_columns: {
        upload: "Upload Jar",
        name: "Name",
        version: "Version",
        jarUrl: "JarUrl",
        status: "Status",
        action: "Actions",
        jarDescription: "Click or drag jar here to upload"
    },
    testData_columns:{
        create_title: "Create TestData",
        update_title: "Update TestData",
        testData_name: "TestDataName",
        name: "Name",
        description: "Description",
        methed: "Methed",
        header: "Header",
        delimiter: "Delimiter",
        schema: "Schema",
        CreateTime: "CreateTime",
        action: "Actions",
        fileDescription: "Click or drag file here to upload",
        uploadPrompt: "If the CSV file you upload contains Chinese characters, please use UTF-8 encoding"
    },
    admin_columns: {
        create_title: "Create Schedule",
        update_title: "Update Schedule",
        jobName: "Name",
        jobClass: "Class",
        cronExpression: "Cron",
        name: "Name",
        class: "Class",
        cron: "Cron",
        status: "Status",
        createTime: "CreateTime",
        action: "Actions"
    },
    stopsComponent_columns: {
        name: "Name",
        description: "Description",
    },
    homeInfo: {
        introduction_title: "Introduction",
        monitor_title: "Monitor",
        statistics_title: "Statistics",
        CPU_Disk: 'CPU disk usage',
        Memory_Disk: 'Memory disk usage',
        HDFS_Disk: 'HDFS disk usage',
        totalCapacity: 'total capacity',
        Used: 'Used',
        introduction_Info: "PiFlow is a big data pipeline system developed based on the distributed computing engine Spark. It realizes the flow configuration, operation and intelligent monitoring of big data collection, processing, storage and analysis in a WYSIWYG way, providing 100+ standardization Components, including Hadoop, Spark, MLlib, Hive, Solr, ElasticSearch, Redis, etc., supporting field-oriented and flexible secondary component development with superior performance.",
        flowStatistics: "Pipeline statistics, include the number of pipeline flows, the number of processors in the running state, and the number of processors in each running state.",
        scheduleStatistics: "Scheduling statistics, include the number of scheduling pipelines/pipeline groups, and the number of schedules in each state.",
        groupStatistics: "Pipeline group statistics, include the number of pipeline groups, the number of processors of the pipeline groups in the running state, and the number of processors in each running state.",
        OtherStatistics: "Other statistics include the number of DataSources, the number of custom component plug-ins StopsHub, and the number of templates.",
        ComponentStatistics: "Component statistics, include the number of data processing components Stop and the number of data processing component groups StopGroup.",
    }
}