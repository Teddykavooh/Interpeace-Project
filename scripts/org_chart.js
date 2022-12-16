var chart = JSC.chart('chartDiv', {
    debug: true,
    type: 'organizational',
    legend_visible: false,
    series: [
        {
        defaultPoint: {
            label: {
            text: '<b>%name</b><br/>%pos',
            autoWrap: false
            },
            connectorLine_color: '#F2BD21',
            annotation: {
            padding: 9,
            corners: ['cut', 'square', 'cut', 'square'],
            margin: [15, 5, 10, 0]
            },
            outline: { color: '#002B5C', width: 2 },
            color: '#DCEAD7',
            tooltip: '<b>%name</b><br/>%pos<br/>%phone'
        },
        points: [
            {
            name: 'BOARD',
            id: 'ms',
            color: '#006B38',
            label_color: 'white',
            attributes: { pos: 'Board Members', phone: '' }
            },
            {
            name: 'CEO/Executive Director',
            id: 'mh',
            parent: 'ms',
            attributes: {
                pos: '2nd in Command',
                phone: ''
            }
            },
            {
            name: 'Northeastern Peacebuilding Team',
            id: 'cl',
            parent: 'mh',
            attributes: {
                pos: 'Team One',
                phone: ''
            }
            },
            {
            name: 'Northrift Peacebuilding Team',
            id: 'kb',
            parent: 'mh',
            attributes: {
                pos: 'Team Two',
                phone: ''
            }
            },
            {
            name: 'Marsabit Peacebuilding Team',
            id: 'cr',
            parent: 'mh',
            attributes: {
                pos: 'Team Three',
                phone: ''
            }
            }
        ]
        }
    ],
    toolbar: {
        defaultItem: { margin: 5, events_click: orientChart },
        items: {
        Left_icon: 'system/default/zoom/arrow-left',
        Right_icon: 'system/default/zoom/arrow-right',
        Down_icon: 'system/default/zoom/arrow-down',
        Up_icon: 'system/default/zoom/arrow-up'
        }
    }
});

function orientChart(direction) {
chart.options({ type: 'organizational ' + direction });
}