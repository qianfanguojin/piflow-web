module.exports = {
    title: "PiFlow Big Data Pipeline System",
    sidebar: {
        dashboard: "Dashboard",
        flow: "Flow",
        group: "Group",
        processes: "Process",
        template: "Template",
        data_source: "DataSource",
        example: "Example",
        admin: "Admin",
    },
    page: {
        prev_text: "Previous",
        next_text: "Next"
    },
    tip: {
        tilte: "Piflow system tips",
        fault_content: "An unknown error occurred in the background run！",
        update_success_content: "update succeeded！",
        update_fail_content: "update failed！",
        save_success_content: "template saved successfully！",
        save_fail_content: "template save failed！",
        add_success_content: "added succeeded！",
        add_fail_content: "add failed！",
        run_success_content: "run succeeded！",
        run_fail_content: "run failed！",
        stop_success_content: "stop succeeded！",
        stop_fail_content: "stop failed！",
        get_success_content: "Data acquisition successful！",
        get_fail_content: "Data acquisition failed！",
        dubug_success_content: "dubug succeeded！",
        dubug_fail_content: "dubug failed！",
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
        create_title: "Create",
        udate_title: "Update flow",
        template_title: "Template name",
        ok_text: "Submit",
        confirm: "Confirm",
        cancel_text: "Cancel",
        delete_content: "Are you sure to delete",
        flow_name: "FlowName",
        driverMemory: "DriverMemory",
        executorNumber: "ExecutorNumber",
        executorMemory: "ExecutorMemory",
        executorCores: "ExecutorCores",
        description: "Description",
        type: "Type",
        name: "Name",
        addProperty: "AddProperty",
        jobName: "Name",
        jobClass: "Class",
        cronExpression: "Cron",
    },
    flow_columns: {
        name: "Name",
        description: "description",
        crtDttmString: "crtDttmString",
        dataSourceType: "DataSourceType",
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
        name: "name",
        crtDttm: "CreateTime",
        action: "Actions"
    },
    admin_columns: {
        name: "Name",
        class: "Class",
        cron: "Cron",
        status: "Status",
        createTime: "CreateTime",
        action: "Actions"
    },


}